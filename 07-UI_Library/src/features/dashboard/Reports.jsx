import { Card } from "@/components/ui/card";
import { Table } from "antd";

export default function Reports() {
  const columns = [
    { title: "User", dataIndex: "name" },
    { title: "Role", dataIndex: "role" },
    { title: "Status", dataIndex: "status" },
  ];

  const data = [
    { key: 1, name: "Vaishnavi", role: "Admin", status: "Active" },
    { key: 2, name: "Rahul", role: "Manager", status: "Active" },
    { key: 3, name: "Anita", role: "User", status: "Inactive" },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold">Reports</h1>
        <p className="text-muted-foreground">
          User activity and access overview
        </p>
      </div>

      <Card className="p-4">
        <Table columns={columns} dataSource={data} pagination={false} />
      </Card>
    </div>
  );
}
