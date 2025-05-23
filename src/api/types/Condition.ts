/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Vapi from "../index";

export interface Condition {
    /** This is the operator you want to use to compare the parameter and value. */
    operator: Vapi.ConditionOperator;
    /** This is the name of the parameter that you want to check. */
    param: string;
    /** This is the value you want to compare against the parameter. */
    value: string;
}
