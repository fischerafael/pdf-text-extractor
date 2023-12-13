import React, { useState } from "react";
import { InputSelect, InputSelectProps } from "../InputSelect";
import { IOption } from "@/client/interfaces";
import * as C from "@chakra-ui/react";
import { theme } from "@/client/config/theme";

interface InputSelectMultipleProps extends InputSelectProps {}

export const InputSelectMultiple = ({
  value,
  options,
  ...props
}: InputSelectMultipleProps) => {
  const [selectedOptions, setSelectedOptions] = useState<IOption[]>([]);
  const placeholderOption: IOption = {
    key: "0",
    value: "Select",
  };

  const onRemove = (optionKey: string) => {
    console.log("KEY TO REMOVE", optionKey);
    const updated = selectedOptions.filter((op) => op.key !== optionKey);
    setSelectedOptions(updated);
  };

  const onSelect = (optionValue: string) => {
    const option = options?.find((op) => op.value === optionValue)!;
    const alreadySelected = selectedOptions.some(
      (selected) => selected.key === option?.key
    );
    if (alreadySelected) return;
    setSelectedOptions((prev) => [...prev, option]);
  };

  const filteredOptions = [
    placeholderOption,
    ...(options?.filter((op) => {
      const isSelected = selectedOptions.some(
        (option) => option.key === op.key
      );
      return !isSelected;
    }) || []),
  ];

  console.log("selectedOptions", selectedOptions);

  return (
    <C.VStack w="full" spacing="2">
      <InputSelect
        onChange={(e) => onSelect(e.target.value)}
        options={filteredOptions}
        value={value}
        {...props}
      />
      <C.HStack justify="flex-start">
        {selectedOptions.map((selected) => (
          <C.Tag
            key={selected.key}
            colorScheme={theme.accentColour}
            onClick={() => onRemove(selected.key)}
          >
            {selected.value}
          </C.Tag>
        ))}
      </C.HStack>
    </C.VStack>
  );
};
