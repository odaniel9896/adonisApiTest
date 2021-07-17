import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Todo extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public title : String

  @column()
  public is_completed : boolean

  @column.dateTime({ autoCreate: true,  serialize: (value: DateTime | null) => {
    return value ? value.setZone('utc').toISO() : value
  }, })
  public created_at: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updated_at: DateTime
}
