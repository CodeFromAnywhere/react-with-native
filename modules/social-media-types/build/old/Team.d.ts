import { DefaultModelType } from "model-types";
import { UserType } from "./User";
export interface Team extends DefaultModelType {
    teamMembers: TeamMember[];
    name: string;
}
export interface TeamMember extends DefaultModelType {
    isAdmin: boolean;
    userId: string;
    user?: UserType;
    teamId: string;
    team: Team;
}
//# sourceMappingURL=Team.d.ts.map