/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Vapi from "../index";

export interface InviteUserDto {
    emails: string[];
    role: Vapi.InviteUserDtoRole;
    redirectTo?: string;
}
