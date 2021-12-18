import dayjs from 'dayjs';

export function getRelativeHumanTime(dateString) {
  const date = dayjs(dateString);
  const now = dayjs();

  if (date.year() !== now.year()) {
    return date.format('DD MMMM, YYYY');
  } else if (date.dayOfYear() !== now.dayOfYear()) {
    return date.format('DD/MM');
  } else if (date.dayOfYear() === now.dayOfYear()) {
    return date.format('HH:mm');
  } else {
    return date.format('DD MMMM, YYYY');
  }
}

export function getMessageTime(dateString) {
  return dayjs(dateString).format('HH:mm:ss DD/MM');
}

export function getMessageSectionTime(dateString) {
  return dayjs(dateString, 'YYYY-MM-DD').format('DD MMMM');
}

export function groupMessagesToSections(messages) {
  let sections = [];
  let result = messages.reduce((acc, value) => {
    const date = dayjs(value.ctime).format('YYYY-MM-DD');
    // Group initialization
    if (!acc[date]) {
      acc[date] = [];
    }

    // Grouping
    acc[date].push(value);
    return acc;
  }, {});
  for (var prop in result) {
    sections.push({title: prop, data: result[prop]});
  }
  return sections;
}
