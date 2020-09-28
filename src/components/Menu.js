import React, { Component } from 'react';
import { Hex } from '../subcomponents';
import { MenuWrap, Menu, MenuLeft, MenuRight } from '../styled-components/components/menu';
import { brown, darkblue, pink } from '../styled-components/colors';

class MenuComponent extends Component {
  render(){
    return (
      <MenuWrap>
        <Menu>
          <Hex className="mobile-hex" color={brown} top={-5} left={-125} size={150}/>
          <Hex className="mobile-hex" color={darkblue} top={240} right={-20} size={100}/>
          <Hex className="mobile-hex" color={pink} top={340} right={50} size={50}/>
          <MenuLeft>
            <table>
              <tr>
                <th>Drinks</th>
                <th>8<sup>oz</sup></th>
                <th>12<sup>oz</sup></th>
                <th>16<sup>oz</sup></th>
              </tr>
              <tr>
                <td>Drip</td>
                <td>$2.75</td>
                <td>$3.25</td>
                <td>$3.75</td>
              </tr>
              <tr>
                <td>Americano</td>
                <td>$2.75</td>
                <td>$3.25</td>
                <td>$3.75</td>
              </tr>
              <tr>
                <td>Drip</td>
                <td>$2.75</td>
                <td>$3.25</td>
                <td>$3.75</td>
              </tr>
              <tr>
                <td>Macchiato</td>
                <td>$2.75</td>
                <td>$3.25</td>
                <td>$3.75</td>
              </tr>
              <tr>
                <td>Cappacchino</td>
                <td>$2.75</td>
                <td>$3.25</td>
                <td>$3.75</td>
              </tr>
              <tr>
                <td>Mocha</td>
                <td>$2.75</td>
                <td>$3.25</td>
                <td>$3.75</td>
              </tr>
              <tr>
                <td>Espresso</td>
                <td>+$2.00</td>
                <td></td>
                <td></td>
              </tr>
            </table>
          </MenuLeft>
          <MenuRight>
            <table>
              <tr>
                <th>Food</th>
                <th></th>
                <th className="mobile-menu-header"></th>
                <th className="mobile-menu-header"></th>
              </tr>
              <tr>
                <td>Bagels</td>
                <td>$2.75</td>
              </tr>
              <tr>
                <td>Avocado Toast</td>
                <td>$7.75</td>
              </tr>
              <tr>
                <td>Pastry</td>
                <td>$2.75</td>
              </tr>
              <tr>
                <td>Cookie</td>
                <td>$7.75</td>
              </tr>
            </table>
          </MenuRight>
        </Menu>
      </MenuWrap>
    );
  }
}

export default MenuComponent;
