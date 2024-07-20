"use client"
import React from 'react'
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { db } from '@/utils/db'
import { AIOutput } from '@/utils/schema'
import { Button } from '@/components/ui/button'
import toast from 'react-hot-toast'

const page = async () => {
    const AIdata = await db.select().from(AIOutput)
    return (
        <div className='p-10 bg-white'>
            <Table>
                <TableCaption>Your recent generated content.</TableCaption>
                <TableHeader>
                    <TableRow>
                        <TableHead >Template</TableHead>
                        <TableHead className="w-[400px]">AI Response</TableHead>
                        <TableHead>Date</TableHead>
                        <TableHead>Words Count</TableHead>
                        <TableHead className="text-right">Copy</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {AIdata.map((data, index) => {
                        return (
                            <TableRow key={index}>
                                <TableCell className="font-medium">{data.templateSlug}</TableCell>
                                <TableCell>{data.aiResponse?.slice(0, 300)}...</TableCell>
                                <TableCell>{data.createdAt}</TableCell>
                                <TableCell>
                                    {data.aiResponse?.length}
                                </TableCell>
                                <TableCell className="text-right"><Button onClick={() => {
                                    toast.success("AI Response Copied to clipboard!")
                                    navigator.clipboard.writeText(data.aiResponse ?? '')

                                }}>Copy</Button></TableCell>
                            </TableRow>
                        );
                    })}
                </TableBody>
            </Table>
        </div>
    )
}

export default page