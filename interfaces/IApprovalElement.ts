import { IFile } from "./IFile";

export interface IApprovalElement {
    title: string;
    value?: string;
    isMandatory?: boolean;
    fileList?: IFile[];
}