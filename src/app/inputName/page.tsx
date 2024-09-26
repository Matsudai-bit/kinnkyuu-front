import { Text, Box, TextField, Flex, Button } from "@radix-ui/themes";

export default function NameInput(): JSX.Element {
    return (
        <>
            <Flex align="center" height="50vh" maxHeight="900px" ml="auto" mr="auto">
                <Flex align="center" direction="column" gap="2">
                    <Text size="5" weight="bold">
                        お名前（ニックネーム可）
                    </Text>
                    <Box maxWidth="500px">
                        <TextField.Root placeholder="例) 市工 太郎" size="3" />
                    </Box>
                    <Box>
                        <Text size="2">※お名前は受け取り時にお伝えください。</Text>
                    </Box>
                </Flex>
            </Flex>

            <Flex gap="3" justify="center" ml="auto" mr="auto">
                <Button color="orange" highContrast radius="full" size="3" variant="outline">
                    <Box width="80px">
                        <Text weight="bold">戻る</Text>
                    </Box>
                </Button>
                <Button color="orange" highContrast radius="full" size="3" variant="outline">
                    <Box width="80px">
                        <Text weight="bold">次へ</Text>
                    </Box>
                </Button>
            </Flex>
        </>
    );
}
