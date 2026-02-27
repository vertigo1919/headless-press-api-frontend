export function translateFilterLabel(sortLabel) {
  //LOGIC FOR TRANSALTION BUTTON LABEL TO BACKEND
  // new: sort_by = created_at order=desc
  // most commented: sort_by = comment_count order=desc
  // least commented: sort_by = comment_count order=asc
  // most votes:  sort_by = votes order=desc
  // least votes:  sort_by = votes order=asc

  switch (sortLabel) {
    case 'New':
      return { sort_by: 'created_at', order: 'desc' };
    case 'Most Commented':
      return { sort_by: 'comment_count', order: 'desc' };
    case 'Least Commented':
      return { sort_by: 'comment_count', order: 'asc' };
    case 'Most Votes':
      return { sort_by: 'votes', order: 'desc' };
    case 'Least Votes':
      return { sort_by: 'votes', order: 'asc' };
    default:
      return { sort_by: 'created_at', order: 'desc' };
  }
}
