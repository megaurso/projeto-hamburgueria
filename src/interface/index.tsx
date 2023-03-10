import React from "react";
import { UseFormRegister } from "react-hook-form"

export interface iUserContextProps{
    userRegister: (data:iUserRegister)=> void
    createUserSession: (data:iUserLogin)=> void
    usersOn?: string | undefined
    products: iProducts[]
}

export interface iChildren{
    children: React.ReactNode
}

export interface iUserRegister{
    name: string,
    email: string,
    password: string,
    confirmPassword?: string,
}

export interface iButtonsProps{
    type: "submit" | "button" | undefined,
    children: React.ReactNode,
    onClick?: React.MouseEventHandler<HTMLButtonElement>
}

export interface iInputsProps{
    placeholder: string,
    type: string,
    id: string,
    register: UseFormRegister<any>
}

export interface iUserLogin{
    email: string,
    password: string
}

export interface iProducts{
    id: number,
    name: string,
    category:string,
    price:number,
    img: string,
    counter:number
}
