import moment from 'moment-timezone'

export interface DryDates {
  date: string
  reason: string
}

export interface DBTypes {
  stateName: string
  extraInfo?: string
  dryDates: DryDates[]
}

/**
 * @param date
 * @returns current year + month + day as string
 */
const modifyDate = (date: string) => {
  return `${moment().format('YYYY')}-${date}`
}

export const DB: DBTypes[] = [
  {
    stateName: 'Andaman and Nicobar Islands',
    extraInfo:
      'Retail shops are closed on every month on the 7th, which is the pay day / salary day in this union territory, and on 2nd & 4th Tuesdays of every month. Plus, a maximum of two fulls or four beers are permitted per person for sale in retail shops.',
    dryDates: [
      {
        date: modifyDate('01-26'),
        reason: 'Republic Day',
      },
      {
        date: modifyDate('08-15'),
        reason: 'Independence Day',
      },
      {
        date: modifyDate('10-02'),
        reason: 'Gandhi Jayanti',
      },
    ],
  },
  {
    stateName: 'Delhi',
    extraInfo:
      'Every excise year, the Government of Delhi, notifies the number of Prohibited days in a year. The three national holidays—26 January 2 October and 15 August, are always prohibited days, and additional prohibited days are announced at the start of the excise year (1 July).',
    dryDates: [
      {
        date: modifyDate('01-26'),
        reason: 'Republic Day',
      },
      {
        date: modifyDate('08-15'),
        reason: 'Independence Day',
      },
      {
        date: modifyDate('10-02'),
        reason: 'Gandhi Jayanti',
      },
    ],
  },
]
