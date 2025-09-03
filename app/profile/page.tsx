import { UserProfile } from "@clerk/nextjs";

export default function ProfilePage() {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-4">
      <div className="w-full max-w-2xl">
        <UserProfile 
          appearance={{
            elements: {
              rootBox: "mx-auto",
              card: "bg-white/5 border border-white/10 backdrop-blur-sm",
              headerTitle: "text-white",
              headerSubtitle: "text-gray-300",
              formButtonPrimary: "bg-white text-black hover:bg-gray-100",
              formButtonSecondary: "bg-white/10 border-white/20 text-white hover:bg-white/20",
              formFieldInput: "bg-white/10 border-white/20 text-white",
              formFieldLabel: "text-gray-300",
              navbar: "bg-white/5 border-white/10",
              navbarButton: "text-gray-300 hover:text-white",
              pageScrollBox: "bg-transparent",
              profileSection: "bg-white/5 border-white/10",
              profileSectionTitle: "text-white",
              profileSectionContent: "text-gray-300",
            }
          }}
        />
      </div>
    </div>
  );
}
