import React from 'react'

import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Badge, IconButton } from '@mui/material';

const CartWidget = ({ cartQuantity }) => {
  return (
    <IconButton>
        <Badge badgeContent={cartQuantity} color="error">
            <ShoppingCartIcon htmlColor='#002884' />
        </Badge>
    </IconButton>
  )
}

export default CartWidget;