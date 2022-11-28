import { DefaultModelType } from "model-types";
import { SendMessageType } from "../to-be-reviewed/message-types";
import { DefaultResponse, Endpoint } from "sensible-core";
export interface TaskData {
    scrapeProfile: {
        profilePath: string;
    };
    scrapeConnections: null;
    login: {
        email: string;
        password: string;
    };
    scrapePosts: null;
    sendMessage: SendMessageType;
    testEndpoint: null;
}
export declare const taskPriorities: readonly ["low", "high", "critical", "toggleAutomationPriority"];
export declare type TaskPriority = typeof taskPriorities[number];
export interface TaskConstructor {
    taskName: string;
    /** minimum time required to run this task; if task finishes before this time, it waits until this time passes */
    minimumTimeRequired: number;
}
export declare const allTasks: readonly TaskConstructor[];
export declare const taskName: readonly ["scrapeProfile", "scrapeConnections", "scrapeGroups", "scrapePosts", "sendMessage", "login", "createPost", "testEndpoint", "toggleAutomation"];
export declare type TaskName = typeof taskName[number];
export declare const taskNames: {
    scrapeProfile: "scrapeProfile";
    scrapeConnections: "scrapeConnections";
    scrapeGroups: "scrapeGroups";
    scrapePosts: "scrapePosts";
    sendMessage: "sendMessage";
    login: "login";
    createPost: "createPost";
    testEndpoint: "testEndpoint";
    toggleAutomation: "toggleAutomation";
};
export declare type URL = string;
export interface TaskType extends DefaultModelType {
    /** the priority of the task */
    priority: TaskPriority;
    /** task name */
    taskName: TaskName;
    /** task data in JSON format (string) */
    taskData?: string;
    /** interval  (null = once, number = every x ms) */
    intervalMs: number | null;
    /**
     * every time that we do the task, this is decreased by 1, and if it gets to 0, we delete the task from the model
     */
    amountOfTimesLeft: number | null;
    /**
     * null = as soon as possible (for the prio)
     * number= unix timestamp when to execute it
     */
    startDate: number | null;
    userId: string;
}
export declare type TaskFilter = keyof TaskCreationType;
export declare type TaskOrder = keyof TaskCreationType;
export interface FilterableTaskParams {
    priority: TaskPriority;
    taskName: TaskName;
    taskData?: string;
}
export interface TaskCreationType {
    /** the priority of the task */
    priority: TaskPriority;
    /** task name */
    taskName: TaskName;
    /** task data in JSON format (string) */
    taskData?: string;
    /** interval  (null = once, number = every x ms) */
    intervalMs: number | null;
    /**
     * every time that we do the task, this is decreased by 1, and if it gets to 0, we delete the task from the model
     */
    amountOfTimesLeft: number | null;
    /**
     * null = as soon as possible (for the prio)
     * number= unix timestamp when to execute it
     */
    startDate: number | null;
    userId: number;
}
export interface CreateTaskEndpoint extends Endpoint {
    method: "POST";
    body: {
        loginToken: string;
        task: TaskCreationType;
    };
    response: {
        success: boolean;
        response?: string;
    };
}
export interface GetNextTaskEndpoint extends Endpoint {
    method: "GET";
    body: {
        loginToken: string;
    };
    response: {
        success: boolean;
        response?: string;
        task?: TaskName;
        taskData?: string;
        taskId?: number;
        intervalMs?: number;
        data?: TaskType;
    };
}
export interface GetProfilesScrapedEndpoint extends Endpoint {
    method: "GET";
    body: {
        loginToken: string;
    };
    response: {
        success: boolean;
        response?: string;
        totalConnections?: number;
        connectionsScraped?: number;
    };
}
export interface GetAllTasksEndpoint extends Endpoint {
    method: "GET";
    body: {
        loginToken: string;
        pageNumber: number;
        filter?: TaskFilter;
        filterValue?: string;
        order?: TaskOrder;
    };
    response: {
        success: boolean;
        response?: string;
        hasMore?: boolean;
        pageNumber?: number;
        data?: TaskType[];
    };
}
export interface DeleteTaskEndpoint extends Endpoint {
    method: "POST";
    body: {
        loginToken: string;
        taskId: number;
    };
    response: {
        success: boolean;
        response?: string;
        data?: TaskType[];
    };
}
export interface DeleteAllTasksEndpoint extends Endpoint {
    method: "POST";
    body: {
        loginToken: string;
    };
    response: {
        success: boolean;
        response?: string;
        data?: TaskType[];
    };
}
export interface FinishTaskEndpoint extends Endpoint {
    method: "POST";
    body: {
        loginToken: string;
        taskName: string;
        taskId: number;
        taskData?: string;
    };
    response: DefaultResponse;
}
export interface FailTaskEndpoint extends Endpoint {
    method: "POST";
    body: {
        loginToken: string;
        taskName: string;
        taskId: number;
        taskData?: string;
        error: string;
    };
    response: DefaultResponse;
}
export interface ScheduleMessageEndpoint extends Endpoint {
    method: "POST";
    body: {
        loginToken: string;
        message: SendMessageType;
        postAt: number;
        intervalMs?: number;
        maxTimes?: number;
    };
    response: DefaultResponse;
}
export interface SchedulePostEndpoint extends Endpoint {
    method: "POST";
    body: {
        loginToken: string;
        postAt: number;
        intervalMs?: number;
        maxTimes?: number;
    };
    response: DefaultResponse;
}
export interface TaskEndpoints {
    createTask: CreateTaskEndpoint;
    getNextTask: GetNextTaskEndpoint;
    getProfilesScraped: GetProfilesScrapedEndpoint;
    getAllTasks: GetAllTasksEndpoint;
    deleteTask: DeleteTaskEndpoint;
    deleteAllTasks: DeleteAllTasksEndpoint;
    finishTask: FinishTaskEndpoint;
    failTask: FailTaskEndpoint;
    scheduleMessage: ScheduleMessageEndpoint;
    schedulePost: SchedulePostEndpoint;
}
//# sourceMappingURL=Task.d.ts.map