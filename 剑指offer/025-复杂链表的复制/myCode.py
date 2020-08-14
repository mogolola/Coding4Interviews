from leetcode_tester import Tester


class RandomListNode:
	def __init__(self, x):
		self.label = x
		self.next = None
		self.random = None

class Solution:
	def clone(pHead):
		_pHead = RandomListNode(pHead.label)
		p=pHead
		_p=_pHead
		while (p.next):
			_p.next = RandomListNode(p.next.label)
			p.cloned = _p
			p=p.next
			_p=_p.next
		p = pHead
		_p = _pHead
		while (p.next):
			_p.random = p.random.cloned
			p=p.next
			_p=_p.next
		p = pHead
		while (p.next):
			delete p.cloned
			p=p.next
		return _pHead

