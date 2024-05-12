export enum UserRole {
  admin = "admin",
  editor = "editor",
  guest = "guest",
}

type UserRoleStatuses = Record<UserRole, string>;

// Замініть наступний код на версію за допомогою Record
export const RoleDescription: UserRoleStatuses = {
  [UserRole.admin]: "Admin",
  [UserRole.editor]: "Editor",
  [UserRole.guest]: "Guest",
};
