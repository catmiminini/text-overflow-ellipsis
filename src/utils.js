function testContentOverflow(cellChild) {
  if(!isValidEle(cellChild)) 
      throw new TypeError('Param el of testContentOverflow')
  const range = document.createRange();
  range.setStart(cellChild, 0);
  range.setEnd(cellChild, cellChild.childNodes.length);
  const rangeWidth = range.getBoundingClientRect().width;
  const padding = (parseInt(getComputedStyle(cellChild).paddingLeft, 10) || 0) + (parseInt(getComputedStyle(cellChild).paddingRight, 10) || 0)
  console.log(rangeWidth, cellChild.offsetWidth)
  return (rangeWidth + padding > cellChild.offsetWidth || cellChild.scrollWidth > cellChild.offsetWidth);
}

function testMultiLineContentOverflow(cellChild) {
  return cellChild.style.clientHeight < cellChild.style.scrollHeight;
}

function isValidEle(ele) {
  try {
    if(ele.scrollWidth == null || ele.offsetWidth == null || ele.scrollHeight == null || ele.offsetHeight == null) {
      return false;
    }
  } catch (e) {
    return false;
  }
  return true;
}

export function isSingleLineOverflow(element) {
  if(!isValidEle(element)) {
    throw new TypeError('Param element of isSingleLineOverflow is not a valid element');
  }
  return element.scrollWidth > element.offsetWidth;
}

export function isMultiLineOverflow(element) {
  if(!isValidEle(element)) {
    throw new TypeError('Param element of isMultiLineOverflow is not a valid element');
  }
  return element.scrollHeight > element.offsetHeight;
}




// handleCellMouseEnter(event, row) {
//     const table = this.table;
//     const cell = getCell(event);

//     if (cell) {
//       const column = getColumnByCell(table, cell);
//       const hoverState = table.hoverState = { cell, column, row };
//       table.$emit('cell-mouse-enter', hoverState.row, hoverState.column, hoverState.cell, event);
//     }

//     // 判断是否text-overflow, 如果是就显示tooltip
//     const cellChild = event.target.querySelector('.cell');
//     if (!(hasClass(cellChild, 'el-tooltip') && cellChild.childNodes.length)) {
//       return;
//     }
//     // use range width instead of scrollWidth to determine whether the text is overflowing
//     // to address a potential FireFox bug: https://bugzilla.mozilla.org/show_bug.cgi?id=1074543#c3
//     const range = document.createRange();
//     range.setStart(cellChild, 0);
//     range.setEnd(cellChild, cellChild.childNodes.length);
//     const rangeWidth = range.getBoundingClientRect().width;
//     const padding = (parseInt(getStyle(cellChild, 'paddingLeft'), 10) || 0) +
//       (parseInt(getStyle(cellChild, 'paddingRight'), 10) || 0);
//     if ((rangeWidth + padding > cellChild.offsetWidth || cellChild.scrollWidth > cellChild.offsetWidth) && this.$refs.tooltip) {
//       const tooltip = this.$refs.tooltip;
//       // TODO 会引起整个 Table 的重新渲染，需要优化
//       this.tooltipContent = cell.innerText || cell.textContent;
//       tooltip.referenceElm = cell;
//       tooltip.$refs.popper && (tooltip.$refs.popper.style.display = 'none');
//       tooltip.doDestroy();
//       tooltip.setExpectedState(true);
//       this.activateTooltip(tooltip);
//     }
//   },
