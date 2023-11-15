import { Card } from "@chakra-ui/react";
import React, { useState } from "react";
import Calendar from "react-calendar";

import "../../assets/css/MiniCalender.css";
// import "react-calendar/dist/Calendar.css";

function MiniCalender() {
    const [value, onChange] = useState(new Date());

    return (
        <Card align="center" direction="column" w="100%" maxW="max-content" p="20px 15px" h="max-content">
            <Calendar onChange={onChange} value={value} />
        </Card>
    );
}

export default MiniCalender;
