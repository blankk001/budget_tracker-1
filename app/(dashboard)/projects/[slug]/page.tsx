import { CurrencyComboBox } from "@/components/CurrencyComboBox";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import CreateProjectNote from "../../_components/CreateProjectNote";
import { Button } from "@/components/ui/button";


export default function page({ params }: { params: { slug: string } }) {
    return (
        <>
        <div className="border-b bg-card">
            <div className="container flex flex-wrap items-center justify-between gap-6 py-8">
                <div>
                    <p className="text-3xl font-bold">Project: {params.slug}</p>
                </div>
            </div>
        </div>
        <div className="container mt-4">
            <div className="gap-2 space-y-4">
                <div className="flex justify-between">
                <CreateProjectNote
              trigger={
                <Button
                  variant={"outline"}
                  className="border-emerald-500 bg-emerald-950 text-white hover:bg-emerald-700 hover:text-white"
                >
                  New Project Note
                </Button>
              }
              type="projectNote"
            />
            <CreateProjectNote
              trigger={
                <Button
                  variant={"outline"}
                  className="border-rose-500 bg-rose-950 text-white hover:bg-rose-700 hover:text-white"
                >
                  New Outstanding Task
                </Button>
              }
              type="outstandingTask"
            />

                </div>
    
                <Card>
                <CardHeader>
                    <CardTitle>Progress Notes</CardTitle>
                    <CardDescription>
                    Update with your progress notes
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    
                </CardContent>
                </Card>
                <Card>
                <CardHeader>
                    <CardTitle>Outstanding tasks</CardTitle>
                    <CardDescription>
                    Update with your outstanding tasks
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    
                </CardContent>
                </Card>
            </div>

            </div>
        </>
    )
}