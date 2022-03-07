
export interface BaseLambdaHandler{
    /**
     * a wrapper function for the handle function.
     * @param request request passed when calling the function.
     */
    doHandle(request: any): any;
}