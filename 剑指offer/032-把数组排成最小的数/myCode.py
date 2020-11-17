class Solution:
	def isLess(self, n1, n2):
		return int(str(n1)+str(n2)) < int(str(n2)+str(n1))
	
	def merge(self, n1,n2):
		j = 0;
		for i in range(len(n1)):
			while j<len(n2) and self.isLess(n2[j],n1[i]):
				j+=1
			n2.insert(j, n1[i])
			j+=1
		return n2;
	
	def sort(self, numbers):
		l = len(numbers)
		if len(numbers)>=2:
			mid = int(l / 2)
			return self.merge(self.sort(numbers[:mid]), self.sort(numbers[mid:]))
		else:
			return numbers;
		
	
	def PrintMinNumber(self, numbers):
		return ''.join(list(map(lambda i:str(i) ,self.sort(numbers))))

solution = Solution()
print(solution.PrintMinNumber([3,32,321]))
