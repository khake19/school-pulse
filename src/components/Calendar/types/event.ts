export interface IEventInfo {
  timeText: string
  event: IEvent
}

export interface IEvent {
  title: string
  start?: string
  end?: string
  date?: string
  color?: string
}

export interface IEventContent {
  start: Date
  end: Date
  startStr: string
  endStr: string
}
