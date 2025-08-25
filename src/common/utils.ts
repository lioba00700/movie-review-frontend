//2025.08.21 공용으로 사용되는 유틸 함수 관리

//날짜 포맷; yyyy-mm-dd
export const formatDate = (date: Date): string => {
  console.log(date);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
};
