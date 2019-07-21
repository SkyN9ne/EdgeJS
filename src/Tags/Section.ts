/**
 * @module edge
 */

/*
* edge
*
* (c) Harminder Virk <virk@adonisjs.com>
*
* For the full copyright and license information, please view the LICENSE
* file that was distributed with this source code.
*/

import { TagToken } from 'edge-lexer'
import { Parser, EdgeBuffer } from 'edge-parser'

export class SectionTag {
  public static block = true
  public static seekable = true
  public static selfclosed = true
  public static tagName = 'section'

  public static compile (parser: Parser, buffer: EdgeBuffer, token: TagToken) {
    token.children.forEach((token) => (parser.processToken(token, buffer)))
  }
}