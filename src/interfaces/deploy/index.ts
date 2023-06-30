export interface ICreateDeployFormValues {
  message: string
  title: string
  project: string
  team: string
  date: Date
  toggleDate: boolean
  pbis: string[]
  tags: string[]
  pbi: string
  tag: string
  templateUnused: string
  author: {
    name: string
    email: string
    externalId: string
  }
}
