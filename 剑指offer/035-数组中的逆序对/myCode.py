class Solution:
    def InversePairs(self, data):
        # write code here
        self.pair_num = 0
        self.data = data
        self.merge(0, len(self.data))
        return self.pair_num
 
    def merge(self, start, end):
        if start >= end - 1: return
        mid = (start + end) // 2
        self.merge(start, mid)
        self.merge(mid, end)
        i,j = start,mid
        arr = [0]*(end-start)
        arr_index= 0
        while i < mid and j < end:
            if self.data[i] < self.data[j]:
                # arr.append(data[i])
                arr[arr_index] = self.data[i]
                i += 1
            else:
                self.pair_num += mid - i
                if self.pair_num >= 1000000007:
                    self.pair_num -= 1000000007
                # arr.append(data[j])
                arr[arr_index] = self.data[j]
                j += 1
            arr_index += 1
        if i < mid:
            # arr.extend(data[i:mid])
            for x in range(i,mid):
                arr[arr_index] = self.data[x]
                arr_index += 1
 
        if j < end:
            # arr.extend(data[j:end])
            for x in range(j,end):
                arr[arr_index] = self.data[x]
                arr_index += 1
        self.data[start:end] = arr
