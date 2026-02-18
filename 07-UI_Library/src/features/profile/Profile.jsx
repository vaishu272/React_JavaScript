import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function Profile() {
  return (
    <div className="mx-auto max-w-3xl space-y-6 p-6">
      <div>
        <h1 className="text-2xl font-semibold">Profile</h1>
        <p className="text-muted-foreground">Manage your account settings</p>
      </div>

      <Card className="p-6 space-y-4">
        <div className="space-y-2">
          <label className="text-sm font-medium">Full Name</label>
          <Input placeholder="Enter your name" />
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium">Email</label>
          <Input type="email" placeholder="Enter email" />
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium">Password</label>
          <Input type="password" placeholder="Change password" />
        </div>

        <Button className="mt-2">Save Changes</Button>
      </Card>
    </div>
  );
}
