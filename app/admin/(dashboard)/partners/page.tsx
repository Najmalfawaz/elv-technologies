import { prisma } from "@/lib/prisma";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Plus, Pencil, Trash2 } from "lucide-react";
import Image from "next/image";
import { DeletePartnerButton } from "./delete-partner-button";

export default async function PartnersPage() {
  const partners = await prisma.partner.findMany({
    orderBy: { priority: "asc" },
  });

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold tracking-tight">Partners</h1>
        <Button asChild>
          <Link href="/admin/partners/new">
            <Plus className="mr-2 h-4 w-4" />
            Add Partner
          </Link>
        </Button>
      </div>

      <div className="rounded-md border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900">
        <div className="relative w-full overflow-auto">
          <table className="w-full caption-bottom text-sm">
            <thead className="[&_tr]:border-b border-slate-200 dark:border-slate-800">
              <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-900/50 transition-colors">
                <th className="h-12 px-4 text-left align-middle font-medium text-slate-500">Logo</th>
                <th className="h-12 px-4 text-left align-middle font-medium text-slate-500">Name</th>
                <th className="h-12 px-4 text-left align-middle font-medium text-slate-500">Category</th>
                <th className="h-12 px-4 text-left align-middle font-medium text-slate-500">Priority</th>
                <th className="h-12 px-4 text-right align-middle font-medium text-slate-500">Actions</th>
              </tr>
            </thead>
            <tbody className="[&_tr:last-child]:border-0">
              {partners.map((partner) => (
                <tr key={partner.id} className="border-b border-slate-100 dark:border-slate-800 hover:bg-slate-50/50 dark:hover:bg-slate-900/50 transition-colors">
                  <td className="p-4 align-middle">
                    <div className="relative h-10 w-10">
                      <Image
                        src={partner.logo}
                        alt={partner.name}
                        fill
                        className="object-contain"
                        unoptimized
                      />
                    </div>
                  </td>
                  <td className="p-4 align-middle font-medium">{partner.name}</td>
                  <td className="p-4 align-middle">{partner.category}</td>
                  <td className="p-4 align-middle">{partner.priority}</td>
                  <td className="p-4 align-middle text-right">
                    <div className="flex justify-end gap-2">
                      <Button variant="ghost" size="icon" asChild>
                        <Link href={`/admin/partners/edit/${partner.id}`}>
                          <Pencil className="h-4 w-4" />
                        </Link>
                      </Button>
                      <DeletePartnerButton id={partner.id} />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
