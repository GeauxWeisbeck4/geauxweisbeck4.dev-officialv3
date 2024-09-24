import React, { useState } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

interface Task {
    id: string;
    title: string;
    date: string;
    description: string;
}

interface Column {
    id: string;
    title: string;
    tasks: Task[];
}

const initialColumns: Column[] = [
    {
        id: 'backlog',
        title: 'Backlog',
        tasks: [
            { id: '052024-5', title: 'Add projects to Tar Heel Dev Studio', date: '2024-10-04', description: 'Add projects to Tar Heel Dev Studio - need to create page and projects content config in Astro.' },
            { id: '052024-6', title: 'Hashnode Blog Post', date: '2024-09-24', description: 'Get blog started again by publishing new Hashnode blog post.' },
            { id: '052024-7', title: 'Dev.to Cool Algorithms Pt.2', date: '2024-09-25', description: 'Continue the Cool Algorithms series on Dev.to' },
            { id: '052024-8', title: 'WeisMind Introductory Newsletter Email', date: '2024-09-26', description: 'Send my first email newsletter for WeisMind' },
            { id: '052024-9', title: 'MEAN Stack Developer Newsletter', date: '2024-09-25', description: 'Make my comeback email newsletter post' },

        ],
    },
    {
        id: 'in-progress',
        title: 'In Progress',
        tasks: [
            { id: '052024-3', title: 'GeauxWeisbeck4.dev v3.0.1', date: '2024-10-01', description: 'Deploy v3.0.1 of GeauxWeisbeck4.dev, my digital garden' },
            { id: '052024-4', title: 'Tar Heel Dev Studio v3.0.1', date: '2024-09-24', description: 'Final review of site and deploy v3.0.1' },
            { id: '052024-10', title: 'Tar Heel Dev Studio Marketing Q3', date: '2024-09-30', description: 'Marketing for Tar Heel Dev Studio 3rd quarter' },
        ],
    },
    {
        id: 'done',
        title: 'Done',
        tasks: [
            { id: '052024-1', title: 'Plan Sprint 5', date: '2024-09-23', description: 'Finished planning Sprint 5 - see Asana' },
            { id: '052024-2', title: 'Finish Tar Heel Dev Studio website', date: '2024-09-23', description: 'Finished initial site for v3.0.1 - see Asana' },
        ],
    },
]

export default function KanbanBoard() {
    const [columns, setColumns] = useState(initialColumns);

    const onDragEnd = (result: any) => {
        if (!result.destination) return

        const { source, destination } = result

        if (source.droppableId !== destination.droppableId) {
            const sourceColumn = columns.find(col => col.id === source.droppableId);
            const destColumn = columns.find(col => col.id === destination.droppableId);
            const sourceItems = [...sourceColumn!.tasks];
            const destItems = [...destColumn!.tasks];
            const [removed] = sourceItems.splice(source.index, 1);
            destItems.splice(destination.index, 0, removed);
            setColumns(
                columns.map(col => {
                    if (col.id === source.droppableId) {
                        return { ...col, tasks: sourceItems }
                    }
                    if (col.id === destination.droppableId) {
                        return { ...col, tasks: destItems }
                    }
                    return col
                })
            )
        } else {
            const column = columns.find(col => col.id === source.droppableId)
            const copiedItems = [...column!.tasks]
            const [removed] = copiedItems.splice(source.index, 1)
            copiedItems.splice(destination.index, 0, removed)
            setColumns(
                columns.map(col => {
                    if (col.id === source.droppableId) {
                        return { ...col, tasks: copiedItems }
                    }
                    return col
                })
            )
        }
    }

    return (
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-100">
            <h2 className="text-3xl font-bold text-center mb-2">Current Sprint</h2>
            <p className="text-xl text-center text-gray-600 mb-8">Sprint Five: 9/23 - 10/6</p>
            <DragDropContext onDragEnd={onDragEnd}>
                <div className="flex flex-col md:flex-row gap-8">
                    {columns.map(column => (
                        <div key={column.id} className="flex-1">
                            <h3 className="text-xl font-semibold mb-4">{column.title}</h3>
                            <Droppable droppableId={column.id}>
                                {(provided) => (
                                    <div
                                      {...provided.droppableProps}
                                      ref={provided.innerRef}
                                      className="bg-gray200 p-4 rounded-lg min-h-[200px]"
                                    >
                                        {column.tasks.map((task, index) => (
                                            <Draggable key={task.id} draggableId={task.id} index={index}>
                                                {(provided) => (
                                                    <div
                                                        ref={provided.innerRef}
                                                        {...provided.draggableProps}
                                                        {...provided.dragHandleProps}
                                                        className="bg-white p-4 rounded-lg shadow mb-4"
                                                    >
                                                        <h4 className="font-semibold mb-2">{task.title}</h4>
                                                        <p className="text-sm text-gray-600 mb-2">{task.date}</p>
                                                        <p className="text-sm">{task.description}</p>
                                                    </div>
                                                )}
                                            </Draggable>
                                        ))}
                                    </div>
                                )}
                            </Droppable>
                        </div>
                    ))}
                </div>
            </DragDropContext>
        </section>
    )
}
