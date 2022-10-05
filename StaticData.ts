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
  {
    stateName: 'Jammu',
    dryDates: [
      {
        date: modifyDate('03-04'),
        reason: 'Maha Shivratri',
      },
      {
        date: modifyDate('04-10'),
        reason: 'Ram Navami',
      },
      {
        date: modifyDate('08-15'),
        reason: 'Krishna Janmashtami',
      },
      {
        date: modifyDate('08-15'),
        reason: 'Independence Day',
      },
      {
        date: modifyDate('09-18'),
        reason: 'Krishna Janmashtami',
      },
      {
        date: modifyDate('10-02'),
        reason: 'Gandi Jayanti',
      },
      {
        date: modifyDate('11-08'),
        reason: 'Guru Nanak Jayanti',
      },
    ],
  },
  {
    stateName: 'Kashmir',
    dryDates: [
      {
        date: modifyDate('03-04'),
        reason: 'Maha Shivratri',
      },
      {
        date: modifyDate('07-04'),
        reason: 'Eid-Ul-Fitr',
      },
      {
        date: modifyDate('07-05'),
        reason: 'Eid-Ul-Fitr',
      },
      {
        date: modifyDate('08-11'),
        reason: 'Eid al-Adha (Bakrid)',
      },
      {
        date: modifyDate('08-15'),
        reason: 'Independence Day',
      },
      {
        date: modifyDate('09-18'),
        reason: 'Krishna Janmashtami',
      },
      {
        date: modifyDate('10-02'),
        reason: 'Gandi Jayanti',
      },
      {
        date: modifyDate('11-09'),
        reason: 'Eid-Ul-Milad',
      },
      {
        date: modifyDate('11-10'),
        reason: 'Eid-Ul-Milad',
      },
    ],
  },
  {
    stateName: 'Karnataka',
    dryDates: [
      {
        date: modifyDate('01-26'),
        reason: 'Republic Day',
      },
      {
        date: modifyDate('10-02'),
        reason: 'Gandhi Jayanti',
      },
      {
        date: modifyDate('09-06'),
        reason: 'Nandwani Jayanti',
      },
    ],
  },
  {
    stateName: 'Kerala',
    extraInfo:
      'Sundays are no longer observed as Prohibited days in the state. Dry days are observed on the day of polling and the previous day during elections as well.',
    dryDates: [
      {
        date: modifyDate('01-01'),
        reason: 'New Year Day',
      },
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
