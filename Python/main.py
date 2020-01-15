from load_data import data
from recommender import algo
import pandas as pd
import csv
import math
import functions

trainingSet = data.build_full_trainset()
algo.fit(trainingSet)

test_data = pd.read_csv('test.csv')
errors = []

with open('test2.csv', mode='w', newline='') as thefile:
    writer = csv.writer(thefile, delimiter=',', quotechar='"', quoting=csv.QUOTE_MINIMAL)
    writer.writerow(['item', 'user', 'actual rating', 'predicted rating', 'error'])

    for i in test_data.values:
        predicted_value = algo.predict(i[1], i[0]).est
        error = math.fabs(i[2] - predicted_value)
        errors.append(error)

rms_error = functions.rms(errors, len(errors))
print('Mean error:', rms_error)

