import { randomUUID } from 'node:crypto'

interface IUserProps {
  userName: string
  email: string
  password: string
  phoneNumber: string
  createdAt?: Date
  updatedAt?: Date
}

export class User {
  private _id: string
  private _props: IUserProps

  constructor(props: IUserProps, id?: string) {
    this._props = {
      createdAt: new Date(),
      updatedAt: new Date(),
      ...props,
    }
    this._id = id || randomUUID()
  }

  get id(): string {
    return this._id
  }

  get userName(): string {
    return this._props.userName
  }

  set userName(value: string) {
    this._props.userName = value
  }

  get email(): string {
    return this._props.email
  }

  set email(value: string) {
    this._props.email = value
  }

  get password(): string {
    return this._props.password
  }

  set password(value: string) {
    this._props.password = value
  }

  get phoneNumber(): string {
    return this._props.phoneNumber
  }

  set phoneNumber(value: string) {
    this._props.phoneNumber = value
  }

  get createdAt(): Date {
    return this._props.createdAt
  }

  get updatedAt(): Date {
    return this._props.updatedAt
  }

  set updatedAt(value: Date) {
    this._props.updatedAt = value
  }
}
