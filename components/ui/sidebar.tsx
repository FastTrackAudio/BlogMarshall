import React, { ReactNode } from "react";

interface SidebarProps {
  children: ReactNode;
  [key: string]: any;
}

export const Sidebar: React.FC<SidebarProps> = ({ children, ...props }) => {
  return <div {...props}>{children}</div>;
};

export const SidebarContent: React.FC<SidebarProps> = ({
  children,
  ...props
}) => {
  return <div {...props}>{children}</div>;
};

export const SidebarFooter: React.FC<SidebarProps> = ({
  children,
  ...props
}) => {
  return <div {...props}>{children}</div>;
};

export const SidebarGroup: React.FC<SidebarProps> = ({
  children,
  ...props
}) => {
  return <div {...props}>{children}</div>;
};

export const SidebarGroupLabel: React.FC<SidebarProps> = ({
  children,
  ...props
}) => {
  return <div {...props}>{children}</div>;
};

export const SidebarHeader: React.FC<SidebarProps> = ({
  children,
  ...props
}) => {
  return <div {...props}>{children}</div>;
};

export const SidebarInset: React.FC<SidebarProps> = ({
  children,
  ...props
}) => {
  return <div {...props}>{children}</div>;
};

export const SidebarMenu: React.FC<SidebarProps> = ({ children, ...props }) => {
  return <div {...props}>{children}</div>;
};

export const SidebarMenuAction: React.FC<SidebarProps> = ({
  children,
  ...props
}) => {
  return <div {...props}>{children}</div>;
};

export const SidebarMenuButton: React.FC<SidebarProps> = ({
  children,
  ...props
}) => {
  return <button {...props}>{children}</button>;
};

export const SidebarMenuItem: React.FC<SidebarProps> = ({
  children,
  ...props
}) => {
  return <div {...props}>{children}</div>;
};

export const SidebarMenuSub: React.FC<SidebarProps> = ({
  children,
  ...props
}) => {
  return <div {...props}>{children}</div>;
};

export const SidebarMenuSubButton: React.FC<SidebarProps> = ({
  children,
  ...props
}) => {
  return <button {...props}>{children}</button>;
};

export const SidebarMenuSubItem: React.FC<SidebarProps> = ({
  children,
  ...props
}) => {
  return <div {...props}>{children}</div>;
};

export const SidebarProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  return <>{children}</>;
};

export const SidebarRail: React.FC<SidebarProps> = ({ children, ...props }) => {
  return <div {...props}>{children}</div>;
};

export const SidebarTrigger: React.FC<SidebarProps> = ({
  children,
  ...props
}) => {
  return <button {...props}>{children}</button>;
};

// Add other components like SidebarFooter, SidebarGroup, etc. following the same pattern
