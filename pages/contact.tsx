import Link from "next/link";
import { MainLayout } from "@/components/layouts/MainLayout";

export default function AboutPage() {
  return (
    <MainLayout>
      <h1>Contact page</h1>

      <h1 className={'title'}>
        Ir a <Link href="/">Home</Link>
      </h1>
      <p className={'description'}>
        Get started by editing&nbsp;
        <code className={'code'}>pages/contact.tsx</code>
      </p>
    </MainLayout>
  );
}
