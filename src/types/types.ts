
export interface IService {
    _id: string,
    title: string,
    description: string,
    delay: number
}

export interface IBanner {
    _id: string,
    title: string,
    image:string,
    subtitle: string,
    link: string
}

export interface IResponsiveMenu {
    open: boolean,
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface ICategory {
    _id: string,
    name:string
}

export interface IReview {
    _id: string,
    title: string,
    description: string,
    delay: number
}