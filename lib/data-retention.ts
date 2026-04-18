// Data Retention Policy Management System

interface RetentionPolicy {
  dataType: string;
  retentionPeriod: number; // in milliseconds
  description: string;
  autoDelete: boolean;
}

interface DataEntry {
  id: string;
  type: string;
  createdAt: Date;
  lastAccessed: Date;
  data: any;
  userId?: string;
  sessionId?: string;
}

class DataRetentionManager {
  private policies: RetentionPolicy[] = [
    {
      dataType: 'analytics',
      retentionPeriod: 26 * 30 * 24 * 60 * 60 * 1000, // 26 months
      description: 'Analytics data for business insights',
      autoDelete: true
    },
    {
      dataType: 'cookies',
      retentionPeriod: 12 * 30 * 24 * 60 * 60 * 1000, // 12 months
      description: 'Cookie preferences and tracking data',
      autoDelete: true
    },
    {
      dataType: 'email_communications',
      retentionPeriod: 24 * 30 * 24 * 60 * 60 * 1000, // 24 months
      description: 'Email signups and newsletter data',
      autoDelete: true
    },
    {
      dataType: 'user_sessions',
      retentionPeriod: 3 * 30 * 24 * 60 * 60 * 1000, // 3 months
      description: 'User session data and preferences',
      autoDelete: true
    },
    {
      dataType: 'contact_forms',
      retentionPeriod: 12 * 30 * 24 * 60 * 60 * 1000, // 12 months
      description: 'Contact form submissions',
      autoDelete: false // Keep for legal/compliance
    },
    {
      dataType: 'error_logs',
      retentionPeriod: 6 * 30 * 24 * 60 * 60 * 1000, // 6 months
      description: 'Application error logs',
      autoDelete: true
    }
  ];

  private dataStore: DataEntry[] = [];

  constructor() {
    // Run cleanup every 24 hours
    setInterval(() => this.runCleanup(), 24 * 60 * 60 * 1000);
  }

  // Add data entry
  addData(dataType: string, data: any, userId?: string, sessionId?: string): string {
    const id = this.generateId();
    const entry: DataEntry = {
      id,
      type: dataType,
      createdAt: new Date(),
      lastAccessed: new Date(),
      data,
      userId,
      sessionId
    };

    this.dataStore.push(entry);
    return id;
  }

  // Get data by ID
  getData(id: string): DataEntry | null {
    const entry = this.dataStore.find(item => item.id === id);
    if (entry) {
      entry.lastAccessed = new Date();
    }
    return entry || null;
  }

  // Get all data by type
  getDataByType(dataType: string): DataEntry[] {
    return this.dataStore.filter(item => {
      if (item.type === dataType) {
        item.lastAccessed = new Date();
        return true;
      }
      return false;
    });
  }

  // Get user data
  getUserData(userId: string): DataEntry[] {
    return this.dataStore.filter(item => {
      if (item.userId === userId) {
        item.lastAccessed = new Date();
        return true;
      }
      return false;
    });
  }

  // Delete data by ID
  deleteData(id: string): boolean {
    const index = this.dataStore.findIndex(item => item.id === id);
    if (index !== -1) {
      this.dataStore.splice(index, 1);
      return true;
    }
    return false;
  }

  // Delete all user data
  deleteUserData(userId: string): number {
    let deletedCount = 0;
    this.dataStore = this.dataStore.filter(item => {
      if (item.userId === userId) {
        deletedCount++;
        return false;
      }
      return true;
    });
    return deletedCount;
  }

  // Export user data
  exportUserData(userId: string): any {
    const userData = this.getUserData(userId);
    return {
      userId,
      exportedAt: new Date().toISOString(),
      dataCount: userData.length,
      dataTypes: [...new Set(userData.map(item => item.type))],
      data: userData.map(item => ({
        id: item.id,
        type: item.type,
        createdAt: item.createdAt,
        lastAccessed: item.lastAccessed,
        data: item.data
      }))
    };
  }

  // Get retention policy for data type
  getPolicy(dataType: string): RetentionPolicy | null {
    return this.policies.find(policy => policy.dataType === dataType) || null;
  }

  // Check if data should be deleted
  shouldDelete(entry: DataEntry): boolean {
    const policy = this.getPolicy(entry.type);
    if (!policy || !policy.autoDelete) {
      return false;
    }

    const now = new Date();
    const expirationTime = new Date(entry.createdAt.getTime() + policy.retentionPeriod);
    
    return now > expirationTime;
  }

  // Run cleanup process
  runCleanup(): { deletedCount: number; deletedTypes: string[] } {
    const deletedTypes = new Set<string>();
    let deletedCount = 0;

    this.dataStore = this.dataStore.filter(entry => {
      if (this.shouldDelete(entry)) {
        deletedTypes.add(entry.type);
        deletedCount++;
        return false;
      }
      return true;
    });

    console.log(`Data retention cleanup: deleted ${deletedCount} entries of types: ${Array.from(deletedTypes).join(', ')}`);
    
    return {
      deletedCount,
      deletedTypes: Array.from(deletedTypes)
    };
  }

  // Get data statistics
  getStatistics(): any {
    const stats = {
      totalEntries: this.dataStore.length,
      byType: {} as Record<string, number>,
      byAge: {
        '0-30 days': 0,
        '31-90 days': 0,
        '91-365 days': 0,
        '1+ years': 0
      },
      policies: this.policies
    };

    const now = new Date();
    
    this.dataStore.forEach(entry => {
      // Count by type
      stats.byType[entry.type] = (stats.byType[entry.type] || 0) + 1;
      
      // Count by age
      const ageInDays = Math.floor((now.getTime() - entry.createdAt.getTime()) / (24 * 60 * 60 * 1000));
      if (ageInDays <= 30) {
        stats.byAge['0-30 days']++;
      } else if (ageInDays <= 90) {
        stats.byAge['31-90 days']++;
      } else if (ageInDays <= 365) {
        stats.byAge['91-365 days']++;
      } else {
        stats.byAge['1+ years']++;
      }
    });

    return stats;
  }

  private generateId(): string {
    return `data_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
  }
}

// Create singleton instance
export const dataRetentionManager = new DataRetentionManager();

// Export types
export type { RetentionPolicy, DataEntry };

// Helper functions for common operations
export const addAnalyticsData = (data: any, userId?: string, sessionId?: string) => {
  return dataRetentionManager.addData('analytics', data, userId, sessionId);
};

export const addEmailData = (data: any, userId?: string) => {
  return dataRetentionManager.addData('email_communications', data, userId);
};

export const addContactData = (data: any, userId?: string) => {
  return dataRetentionManager.addData('contact_forms', data, userId);
};

export const addSessionData = (data: any, sessionId: string) => {
  return dataRetentionManager.addData('user_sessions', data, undefined, sessionId);
};

export const getUserDataExport = (userId: string) => {
  return dataRetentionManager.exportUserData(userId);
};

export const deleteUserDataCompletely = (userId: string) => {
  return dataRetentionManager.deleteUserData(userId);
};
