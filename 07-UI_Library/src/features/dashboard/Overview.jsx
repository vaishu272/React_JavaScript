import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

export default function Overview() {
  return (
    <div className="grid gap-6 md:grid-cols-3">
      <Card>
        <CardHeader>
          <CardTitle>Users</CardTitle>
        </CardHeader>
        <CardContent className="text-2xl font-semibold">1,240</CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Revenue</CardTitle>
        </CardHeader>
        <CardContent className="text-2xl font-semibold">₹45,200</CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Orders</CardTitle>
        </CardHeader>
        <CardContent className="text-2xl font-semibold">320</CardContent>
      </Card>
    </div>
  );
}
