-- main = do
    -- putStrLn "input line"
    -- line <- getLine
    -- putStrLn line
    -- putStrLn "input content"
    -- content <- getContents
    -- putStrLn content
-- inc x = x + 1

-- main = do
--     print $ inc 5

-- listA = [3, 2, 4]
-- listB = [3, 3, 2]

-- result = if listA < listB then "list B is begger than list A"
-- else "list B is not begger than list A"

-- main = putStrLn result

-- arry = tail [1, 2, 3, 4, 5]
-- arry2 = init [2, 3, 4, 5, 6]
-- arry3 = head [3, 4, 5]
-- arry4 = last [4, 5, 6]
-- arry5 = null [1]
-- arry6 = null []
-- arry7 = take 2 [1, 2, 3, 4, 5]
-- main = print arry7

area r = pi * square r
    where
        pi = 3.14
        square x = x * x

main = do
    let r = 5.0
    print(area r)

