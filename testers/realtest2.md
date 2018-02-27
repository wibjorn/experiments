---
title: CScrollBar
TOCTitle: CScrollBar
ms:assetid: VS|vcmfs98|~html_mfc_cscrollbar.htm
ms:mtpsurl: https://msdn.microsoft.com/en-us/library/Aa313548(v=VS.60)
ms:contentKeyID: 4007515
ms.date: 07/12/2006
mtps_version: v=VS.60
_tocRel: aa313548(v=vs.60)/toc.json
 
# Hello

# Hello


![](images\Aa313548.cscrolbr(en-us,VS.60).gif)

The **CScrollBar** class provides the functionality of a Windows scroll-bar control.

You create a scroll-bar control in two steps. First, call the constructor **CScrollBar** to construct the **CScrollBar** object, then call the [Create](aa313520\(v=vs.60\).md) member function to create the Windows scroll-bar control and attach it to the **CScrollBar** object.

If you create a **CScrollBar** object within a dialog box (through a dialog resource), the **CScrollBar** is automatically destroyed when the user closes the dialog box.

If you create a **CScrollBar** object within a window, you may also need to destroy it.

If you create the **CScrollBar** object on the stack, it is destroyed automatically. If you create the **CScrollBar** object on the heap by using the **new** function, you must call **delete** on the object to destroy it when the user terminates the Windows scroll bar.

If you allocate any memory in the **CScrollBar** object, override the **CScrollBar** destructor to dispose of the allocations.

For related information about using **CScrollBar**, see [](https://msdn.microsoft.com/en-us/library/_core_control_topics\(v=VS.60\)) in *Visual C++ Programmer’s Guide*.

**\#include \<afxwin.h\>**

[Class Members](aa300414\(v=vs.60\).md) |  [Base Class](aa250362\(v=vs.60\).md) |  [Hierarchy Chart](aa251523\(v=vs.60\).md)

**See Also**   [CWnd](aa250362\(v=vs.60\).md), [CButton](https://msdn.microsoft.com/en-us/library/vs%7cvclib%7c%7e%5chtml%5c_mfc_cbutton.htm\(v=VS.60\)), [CComboBox](aa278731\(v=vs.60\).md), [CEdit](aa279340\(v=vs.60\).md), [CListBox](aa295587\(v=vs.60\).md), [CStatic](aa314170\(v=vs.60\).md), [CDialog](aa279061\(v=vs.60\).md)

