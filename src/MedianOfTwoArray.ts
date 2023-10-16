function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
  const n : number = nums1.length;
  const m : number = nums2.length;

  // Make a resultant sorted array
  const result: number[] = [];
  let i: number = 0;
  let j: number = 0;

  while(i < n && j < m) {
    if(nums1[i] < nums2[j]) {
      result.push(nums1[i]);
      i++;
    } else {
      result.push(nums2[j]);
      j++;
    }
  }

  while(i < n) {
    result.push(nums1[i]);
    i++;
  }

  while(j < m) {
    result.push(nums2[j]);
    j++;
  }

  const total: number = result.length;

  if(total % 2 === 1)
    return result[Math.floor(total / 2)];
  else {
    const mid1 = result[total / 2 - 1];
    const mid2 = result[total/ 2];
    return (mid1 + mid2) / 2;
  }

};
