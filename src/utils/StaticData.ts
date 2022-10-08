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

export interface RegionNameTypes {
  label: string
  value: string
}

/**
 * @param date
 * @returns current year + month + day as string
 */
const modifyDate = (date: string) => {
  return `${moment().format('YYYY')}-${date}`
}

export const regionNames: RegionNameTypes[] = [
  {
    label: 'Andaman and Nicobar Islands',
    value: 'Andaman and Nicobar Islands',
  },
  {
    label: 'Delhi',
    value: 'Delhi',
  },
  {
    label: 'Jammu',
    value: 'Jammu',
  },
  {
    label: 'Kashmir',
    value: 'Kashmir',
  },
  {
    label: 'Karnataka',
    value: 'Karnataka',
  },
  {
    label: 'Kerala',
    value: 'Kerala',
  },
  {
    label: 'Maharashtra',
    value: 'Maharashtra',
  },
  {
    label: 'Rajasthan',
    value: 'Rajasthan',
  },
  {
    label: 'Tamil Nadu',
    value: 'Tamil Nadu',
  },
  {
    label: 'West Bengal',
    value: 'West Bengal',
  },
]

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
  {
    stateName: 'Maharashtra',
    extraInfo:
      'The district collector can also designate any day as a Prohibited day by giving seven days notice. His list may vary depending on the date of festivals as well as specific Prohibited day announcements by the Government of Maharashtra.',
    dryDates: [
      {
        date: modifyDate('01-14'),
        reason: 'Makar Sakranti',
      },
      {
        date: modifyDate('01-26'),
        reason: 'Republic Day',
      },
      {
        date: modifyDate('01-30'),
        reason: 'Martyrs Day',
      },
      {
        date: modifyDate('02-19'),
        reason: 'Chhatrapati Shivaji Mahavir Jayanti',
      },
      {
        date: modifyDate('02-26'),
        reason: 'Swami Dayanand Saraswati Jayanti',
      },
      {
        date: modifyDate('03-01'),
        reason: 'Maha Shivratri',
      },
      {
        date: modifyDate('03-18'),
        reason: 'Holi',
      },
      {
        date: modifyDate('04-10'),
        reason: 'Ram Navami',
      },
      {
        date: modifyDate('04-14'),
        reason: 'Ambedkar Jayanti & Mahavir Jayanti',
      },
      {
        date: modifyDate('04-15'),
        reason: 'Good Friday',
      },
      {
        date: modifyDate('05-01'),
        reason: 'Maharashtra Day',
      },
      {
        date: modifyDate('05-03'),
        reason: 'Eid Ul Fitr',
      },
      {
        date: modifyDate('07-10'),
        reason: 'Ashadi Ekadashi',
      },
      {
        date: modifyDate('07-13'),
        reason: 'Guru Purnima',
      },
      {
        date: modifyDate('08-08'),
        reason: 'Muharram',
      },
      {
        date: modifyDate('08-15'),
        reason: 'Independence Day',
      },
      {
        date: modifyDate('08-19'),
        reason: 'Janmashtami',
      },
      {
        date: modifyDate('08-31'),
        reason: 'Ganesh Chaturthi',
      },
      {
        date: modifyDate('09-09'),
        reason: 'Anant Chaturdashi',
      },
      {
        date: modifyDate('10-02'),
        reason: 'Gandhi Jayanti',
      },
      {
        date: modifyDate('10-05'),
        reason: 'Dussehra',
      },
      {
        date: modifyDate('10-09'),
        reason: 'Maharishi Valmiki Jayanti',
      },
      {
        date: modifyDate('10-24'),
        reason: 'Diwali',
      },
      {
        date: modifyDate('11-04'),
        reason: 'Kartiki Ekadashi',
      },
      {
        date: modifyDate('11-08'),
        reason: 'Guru Nanak Jayanti',
      },
      {
        date: modifyDate('12-25'),
        reason: 'Christmas',
      },
    ],
  },
  {
    stateName: 'Rajasthan',
    dryDates: [
      {
        date: modifyDate('01-26'),
        reason: 'Republic Day',
      },
      {
        date: modifyDate('01-30'),
        reason: 'Martyrs Day',
      },
      {
        date: modifyDate('03-04'),
        reason: 'Maha Shivratri',
      },
      {
        date: modifyDate('03-30'),
        reason: 'Rajasthan Formation Day',
      },
      {
        date: modifyDate('08-15'),
        reason: 'Independence Day',
      },
      {
        date: modifyDate('10-02'),
        reason: 'Gandhi Jayanti',
      },
      {
        date: modifyDate('10-30'),
        reason: 'Harijan Day',
      },
    ],
  },
  {
    stateName: 'Tamil Nadu',
    dryDates: [
      {
        date: modifyDate('01-15'),
        reason: 'Thiruvalluvar Day',
      },
      {
        date: modifyDate('01-16'),
        reason: 'Thiruvalluvar Day',
      },
      {
        date: modifyDate('01-26'),
        reason: 'Republic Day',
      },
      {
        date: modifyDate('03-04'),
        reason: 'Maha Shivratri',
      },
      {
        date: modifyDate('05-10'),
        reason: 'May Day',
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
    stateName: 'West Bengal',
    extraInfo:
      'Drinks may be served and consumed even on "dry days". Private consumption too is allowed on the said "dry days". Only the open sale of liquor at restaurants, liquor shops and other permitted places is disallowed on those days.',
    dryDates: [
      {
        date: modifyDate('01-14'),
        reason: 'Makar Sankranti',
      },
      {
        date: modifyDate('01-26'),
        reason: 'Republic Day',
      },
      {
        date: modifyDate('01-30'),
        reason: 'Martyrs Day',
      },
      {
        date: modifyDate('03-01'),
        reason: 'Maha Shivratri',
      },
      {
        date: modifyDate('03-18'),
        reason: 'Holi',
      },
      {
        date: modifyDate('04-10'),
        reason: 'Ram Navami',
      },
      {
        date: modifyDate('04-15'),
        reason: 'Mahavir Janma Kalyanak',
      },
      {
        date: modifyDate('07-02'),
        reason: 'Eid-Ul-Fitr',
      },
      {
        date: modifyDate('07-03'),
        reason: 'Eid-Ul-Fitr',
      },
      {
        date: modifyDate('08-09'),
        reason: 'Eid al-Adha (Bakrid)',
      },
      {
        date: modifyDate('08-10'),
        reason: 'Eid al-Adha (Bakrid)',
      },
      {
        date: modifyDate('08-08'),
        reason: 'Muharram',
      },
      {
        date: modifyDate('08-11'),
        reason: 'Raksha Bandhan',
      },
      {
        date: modifyDate('08-15'),
        reason: 'Independence Day',
      },
      {
        date: modifyDate('08-18'),
        reason: 'Janmashtami',
      },
      {
        date: modifyDate('08-31'),
        reason: 'Ganesh Chaturthi',
      },
      {
        date: modifyDate('10-02'),
        reason: 'Gandhi Jayanti',
      },
      {
        date: modifyDate('10-05'),
        reason: 'Dussehra',
      },
      {
        date: modifyDate('10-09'),
        reason: 'Eid -e- Milad',
      },
      {
        date: modifyDate('10-24'),
        reason: 'Diwali',
      },
      {
        date: modifyDate('11-8'),
        reason: 'Guru Nanak Jayanti',
      },
    ],
  },
]
