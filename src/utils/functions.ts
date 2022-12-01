import bcrypt from 'bcrypt';
import dayjs from 'dayjs';

export const hashPassword = async (password: string): Promise<string> => {
  const salt = await bcrypt.genSalt(12);
  const hash = bcrypt.hash(password, salt);
  return hash;
};

export const compareDates = (firstDate: string, secondDate: string): any => {
  const todayDate = dayjs().format('DD-MM-YYYY');
  if (
    firstDate < todayDate ||
    secondDate < todayDate ||
    firstDate > secondDate
  ) {
    return null;
  }
  return { firstDate, secondDate };
};
