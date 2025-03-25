// StepsItem.jsx
import { Box, Steps as ChakraSteps } from "@chakra-ui/react";
import * as React from "react";
import { LuCheck } from "react-icons/lu";

export const StepsItem = React.forwardRef(function StepsItem(props, ref) {
  const { title, description, completedIcon, icon, isActive, ...rest } = props;

  // סגנון אם השלב פעיל (ניתן להתאים כרצונך)


  return (
    <ChakraSteps.Item {...rest} ref={ref} >
      <ChakraSteps.Trigger>
        <ChakraSteps.Indicator >

          <ChakraSteps.Status
            complete={completedIcon || <LuCheck />}
            incomplete={icon || <ChakraSteps.Number />}
          />
        </ChakraSteps.Indicator>
        <StepInfo title={title} description={description} />
      </ChakraSteps.Trigger>
      <ChakraSteps.Separator />
    </ChakraSteps.Item>
  );
});

const StepInfo = (props) => {
  const { title, description } = props;

  if (title && description) {
    return (
      <Box>
        <ChakraSteps.Title >{title}</ChakraSteps.Title>
        <ChakraSteps.Description >{description}</ChakraSteps.Description>
      </Box>
    );
  }

  return (
    <>
      {title && <ChakraSteps.Title color="white">{title}</ChakraSteps.Title>}
      {description && <ChakraSteps.Description >{description}</ChakraSteps.Description>}
    </>
  );
};

// ייצוא רכיבים נוספים
export const StepsList = ChakraSteps.List;
export const StepsRoot = ChakraSteps.Root;
export const StepsContent = ChakraSteps.Content;
export const StepsCompletedContent = ChakraSteps.CompletedContent;

export const StepsNextTrigger = ChakraSteps.NextTrigger;
export const StepsPrevTrigger = ChakraSteps.PrevTrigger;
