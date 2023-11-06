import Link from "next/link";
import { MainLayout } from "@/components/layouts/MainLayout";


export default function PricingPage() {
  return (
    <>
      <h1>Princing page</h1>

      <h1 className={"title"}>
        Ir a <Link href="/">Home</Link>
      </h1>
      <p className={"description"}>
        Get started by editing&nbsp;
        <code className={"code"}>pages/pricing/index.tsx</code>
      </p>
    </>
  );
}

PricingPage.getLayout = function getLayout(page: React.ReactElement) {
  return <MainLayout>{page}</MainLayout>;
};
