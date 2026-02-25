import HomeLayout from "@/components/home/home-layout";
import { getDb } from "@/lib/db";

export default async function HomePage() {
  const db = await getDb();

  return <HomeLayout initialData={db} />;
}
