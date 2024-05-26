import React, { useState } from "react";
import ConfettiExplosion from "react-confetti-explosion";

interface Task {
  id: string;
  title: string;
  img: string;
  status: string;
}

interface DragAndDropProps {
    imagesData: Task[];
    lettres: string[];
  }
const DragAndDrop = ({
    imagesData,
    lettres
  }: DragAndDropProps) => {
    const [tasks, setTasks] = useState<Task[]>(imagesData);
    const [dropIndicator, setDropIndicator] = useState<string | null>(null);
    const [currentElement, setCurrentElement] = useState<string | null>(null);

    const handleDragStart = (
    e: React.DragEvent<HTMLDivElement>,
    taskId: string,
    taskTitle: string
    ) => {
    e.dataTransfer.setData("text/plain", taskId.toString());
    setCurrentElement(taskTitle);
    };

    const handleDragEnd = (e: React.DragEvent<HTMLDivElement>) => {
    e.dataTransfer.clearData();
    setDropIndicator(null);
    };

    const handleDrop = (e: React.DragEvent<HTMLDivElement>, status: string) => {
    e.preventDefault();
    const taskId = e.dataTransfer.getData("text/plain");

    const task = tasks?.find((task) => +task.id === +taskId);

    if (task) {
        task.status = status;
        setTasks((prevTasks) =>
        prevTasks?.map((_task) => (_task.id === task?.id ? task : _task))
        );
    }

    setDropIndicator(null);
    };

    const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    if(currentElement!.includes(((e.target as HTMLInputElement).id).toString())) {
        e.preventDefault();
        setDropIndicator(e.currentTarget.id);
    }
    };

    const renderTasks = (status: string) => {
    return tasks
        ?.filter((task) => task.status === status)
        .map((task) => (
        <img
            src={task.img}
            key={task.id}
            draggable
            onDragStart={(e) => handleDragStart(e, task.id, task.title)}
            onDragEnd={handleDragEnd}
            className={`w-25 p-2 bg-gray-100 rounded ${
            dropIndicator === status ? "bg-blue-200 " : ""
            }`}
        />
        ));
    };
    return (
        <div className="flex flex-col p-6 dark:bg-gray-900">
            {tasks.filter((task) => task.status === 'todo').length === 0 &&  <ConfettiExplosion />}
            <h3 className="text-2xl font-bold dark:text-white mb-8 m-auto">Je classe les figurines suivants au tableau:</h3>
            <div className="grid grid-cols-3 gap-2">
                <h2 className="text-center dark:text-white">{''}</h2>
                {lettres?.map((lettre) => (
                    <h2 className="text-center dark:text-white text-3xl" key={lettre}>{lettre}</h2>
                ))}

                <div
                id="todo"
                onDragOver={handleDragOver}
                onDrop={(e) => handleDrop(e, "todo")}
                className={`flex flex-col items-center justify-start w-full border-2 border-dashed p-0.5 gap-1 rounded ${
                    dropIndicator === "todo" ? "bg-blue-100 " : ""
                }`}
                >
                {renderTasks("todo")}
                </div>
                {lettres?.map((lettre) => (
                    <div
                    key={lettre}
                    id={lettre}
                    onDragOver={handleDragOver}
                    onDrop={(e) => handleDrop(e, lettre)}
                    className={`flex flex-col items-center justify-start w-full border-2 border-dashed p-0.5 gap-1 rounded ${
                        dropIndicator === lettre ? "bg-blue-100 " : ""
                    }`}
                    >
                    {renderTasks(lettre)}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default DragAndDrop;