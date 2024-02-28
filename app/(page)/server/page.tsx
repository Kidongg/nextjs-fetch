import DataTable from "@/app/components/table/DataTable";
import { paymentColumns } from "@/app/components/table/columns";

const getPayments = async () => {
  const res = await fetch("http://localhost:3001/payments", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!res.ok) {
    throw new Error(`HTTP error! status: ${res.status}`);
  }

  const data = await res.json();
  return data;
};

const Page = async () => {
  const payments = await getPayments();
  console.log("payments: ", payments);

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-2xl font-bold mb-10">서버 컴포넌트</h1>
      <DataTable data={payments} columns={paymentColumns} />
    </div>
  );
};

export default Page;
