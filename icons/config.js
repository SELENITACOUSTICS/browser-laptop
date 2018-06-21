/* This Source Code Form is subject to the terms of the Mozilla Public
* License, v. 2.0. If a copy of the MPL was not distributed with this file,
* You can obtain one at http://mozilla.org/MPL/2.0/.
*/

const { css } = require('aphrodite/no-important')
const iconStyles = require('./styles')

module.exports = ({ styles }) =>
  <svg className={css(styles, iconStyles.icon)} xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'>
    <g fillRule='evenodd' strokeWidth='1.5'>
      <path d='M10.05148 12.82508c-.621-1.07625-.25275-2.45176.8235-3.07275 1.07625-.621 2.45175-.25276 3.07275.8235.621 1.07625.25275 2.45175-.8235 3.07274-1.0755.621-2.45175.25276-3.07275-.8235z'
        />
      <path d='M17.35745 8.60925c.08475.147.1635.297.23475.44775.10875.228.32025.3885.57225.4095l1.31325.1095c.30075.02475.56025.24.618.5355.2085 1.0605.2025 2.1405-.00225 3.1785-.05775.2955-.31725.51075-.61725.5355l-1.31175.11025c-.25275.02025-.46425.1815-.573.41025-.1425.303-.31125.59475-.50325.873-.14325.20775-.1785.46875-.0705.6975.2745.58275.7785 1.65075.7785 1.65075l-.00525.006c-.48825.48-1.0455.9075-1.66725 1.266-.621.3585-1.26975.627-1.93125.80925l-.00675.00225-1.0395-1.49775c-.144-.207-.39-.30975-.642-.2895-.33675.027-.67425.027-1.008-.00075-.25275-.021-.49725.08025-.64125.288-.2115.3045-.525.75525-.75225 1.083-.17175.2475-.48675.36375-.7725.26625-1.002-.342-1.94025-.876-2.75475-1.587-.228-.198-.285-.53025-.156-.80325.17025-.36075.405-.858.56325-1.194.10725-.228.0735-.48975-.0705-.69675a6.23033 6.23033 0 0 1-.27-.4275c-.08475-.147-.1635-.29625-.2355-.44775-.108-.228-.3195-.3885-.5715-.4095l-1.31325-.10875c-.30075-.0255-.56025-.24075-.618-.53625-.2085-1.0605-.2025-2.1405.0015-3.1785.0585-.2955.318-.51075.618-.5355l1.31175-.1095c.25275-.021.46425-.18225.57225-.411a6.14165 6.14165 0 0 1 .504-.873c.14325-.20775.1785-.46875.0705-.6975-.2745-.58275-.7785-1.65075-.7785-1.65075l.00525-.00525c.48825-.48075 1.0455-.9075 1.6665-1.266.62175-.35925 1.2705-.62775 1.932-.81l.006-.00225 1.04025 1.49775c.144.207.39.3105.642.2895.33675-.027.67425-.02625 1.008.00075.25275.021.4965-.08025.64125-.288.2115-.3045.525-.75525.75225-1.083.17175-.24675.48675-.36375.7725-.26625 1.00125.342 1.94025.87675 2.75475 1.587.228.19875.285.53025.156.80325-.17025.36075-.405.858-.56325 1.194-.10725.228-.0735.48975.0705.6975.09525.13725.18525.27975.27.42675z'
        />
    </g>
  </svg>