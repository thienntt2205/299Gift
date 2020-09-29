/**
 * Definition for singly-linked list.
 * struct ListNode {
 *     int val;
 *     ListNode *next;
 *     ListNode(int x) : val(x), next(NULL) {}
 * };
 */
 var hasCycle = function(head) {
    if(!head) return false;
    var faster = head;
    var slower = head;
    while (faster && faster.next) {
        faster = faster.next.next;
        slower = slower.next;
        if (slower === faster) return true;
    }
    return false;
};
