import { Question } from "./question.model";

export interface Information {
    id: number;
    title: string;
    description: string;
    questions: Question[];
}