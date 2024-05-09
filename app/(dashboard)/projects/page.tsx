

import ProjectsTable from "@/app/(dashboard)/transactions/_components/TransactionTable";
import { differenceInDays, startOfMonth } from "date-fns";
import React, { useState } from "react";
import { toast } from "sonner";
import CreateProject from "../_components/CreateProject";
import { Button } from "@/components/ui/button";

function TransactionsPage() {
  const dateRange = {
    from: startOfMonth(new Date()),
    to: new Date(),
  };

  return (
    <>
      <div className="border-b bg-card">
        <div className="container flex flex-wrap items-center justify-between gap-6 py-8">
          <div>
            <p className="text-3xl font-bold">Projects</p>
          </div>
          
          <CreateProject
              trigger={
                <Button
                  variant={"outline"}
                  className="border-emerald-500 bg-emerald-950 text-white hover:bg-emerald-700 hover:text-white"
                >
                  Create Project
                </Button>
              }
              type="projectNote"
            />
        </div>
      </div>
      
      <div className="container mt-2">
      
        <ProjectsTable from={dateRange.from} to={dateRange.to} />
      </div>
    </>
  );
}

export default TransactionsPage;
